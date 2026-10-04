//////// Utils /////////
////////////////////////

function S(t, e) {
  if (null === e)
    return t;
  if ("master" === e)
    return j(t);
  var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
  if (n) {
    var r = t.split(n[0])
    , i = n[0];
    return j("".concat(r[0], "_").concat(e).concat(i))
  }
  return null
}
function j(t) {
  return t.replace(/http(s)?:/, "")
}

//////// Components /////////
/////////////////////////////

Vue.component('cart-summary', {
  props: ['savings','total','translations'],
  template: `
    <div class="cart-form__summary">
<div class="cart-shipping"><span>{{translations.shipping}}</span><span>{{translations.calculateship}}</span></div>
<div class="cart-savings" v-if="savings"><span>{{translations.savings}}</span><span>{{w(parseInt(savings),window.theme.currency.moneyWithCurrencyFormat)}}</span></div>
<div class="cart-total"><span v-if="translations">{{translations.total}}</span><span>{{w(total,window.theme.currency.moneyWithCurrencyFormat)}}</span></div>
<button class="btn btn-primary rf-submit-to-cart" name="cart">{{translations.button}}</button>
    </div>`
});

Vue.component('cart-item', {
  props: ['id','title','url','stock','quantity','image','price'],
  template: `<li class="cart-item">
        <div class="cart-item__image u-aspect-ratio" style="--aspect-ratio: 1;">
		<a :href="url">
		<img class="lazy"
			 :alt="image.alt" 
			 data-sizes="auto" 
			 data-widths="[200,300,400]" 
			:data-src="S(image.src, '{width}x')">
		</a>
		</div>
        <div class="cart-item__details">
			<span class="cart-item__title" v-if="title">{{title}}</span>
          <div class="cart-item__quantity">
            <select name="update" aria-label="Wähle deine Menge aus:" @change="$emit('update-item',id,$event.target.value)">
				<option v-for="n in stock" :value="n" :selected="n == quantity">{{n}}</option>
            </select>
            <i class="icon icon-dropdown"></i>
          </div>
        </div>
        <div class="cart-item__price">
			<span class="price price--striked" v-if="price.unit.compareAt">{{w(price.unit.compareAt,window.theme.currency.moneyWithCurrencyFormat)}}</span>
			<span class="price price--sale" v-if="price.unit.regular">{{w(price.unit.regular,window.theme.currency.moneyWithCurrencyFormat)}}</span></div>
        	<button class="cart-item__remove" name="remove" @click.prevent="$emit('update-item',id,0)" aria-label="Shavasana Set aus dem Warenkorb entfernen"><i class="icon icon-close"></i></button>
      </li>`
});

//////// Cart Page /////////
////////////////////////////

var cartPageApp = new Vue({
  el: '#cart-js',
  data: {
    cartURL: "".concat(`${Shopify.locale == 'de' ? '' : '/en'}/cart`, "?view=json&timestamp=").concat(Date.now()),
    item_count: 0,
    translations: null,
    summary: null,
    items: null
  },
  methods: {
    updateQuantity: function(id, quantity){
      jQuery.post('/cart/update.js', {
        updates: {
        	[id]: quantity
        }
      }, (data) => {
        this.updateCart();
      });
    },
    updateCart: function(){
     fetch(this.cartURL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Complete cart page>>>',data);
		this.items = data.items;
        this.item_count = data.itemCount;
        this.translations = data.translations;
        this.summary = data.summary;
      });
    },
    updateItem: function(id,q){
      jQuery.post('/cart/update.js',{
        updates: {[id]: q}
      }).then((res) => {
        this.updateCart();
        minicart.getCart();
      });
    },
    formatPrice: function(price){
    	return w(price, window.theme.currency.moneyWithCurrencyFormat);
    }
  },
  created(){
	this.updateCart();
  }
});

//////// Mini Cart /////////
////////////////////////////

var minicart = new Vue({
  el: '#cart-bag',
  data: {
    cartURL: "".concat(`${Shopify.locale == 'de' ? '' : '/en'}/cart`, "?view=json&timestamp=").concat(Date.now()), 
    items: null,
    item_count: 0,
    translations: null,
    summary: null,
    discounted: null,
    discountedInCart: false,
    cart_original_total: 0
  },
  methods: {
    getCart: function(){
      fetch(this.cartURL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Complete>>>',data);
		this.items = data.items;
        this.item_count = data.itemCount;
        this.translations = data.translations;
        this.summary = data.summary;
        this.discounted = data.discounted;
        this.checkDiscountedInCart();
        this.checkDiscounted();
        
        for (var e = document.querySelectorAll('a[href="/cart"]'), n = 0; n < e.length; n += 1)
          e[n].setAttribute("data-item-count", this.item_count);
      });
    },
    updateCart: function(){
      fetch(this.cartURL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Updated Cart>>>',data);
		this.items = data.items;
        this.item_count = data.itemCount;
        this.summary = data.summary;
        this.discounted = data.discounted;
        this.checkDiscountedInCart();
        
        cartPageApp.updateCart();
        for (var e = document.querySelectorAll('a[href="/cart"]'), n = 0; n < e.length; n += 1)
          e[n].setAttribute("data-item-count", this.item_count);
      });
    },
    toggleCart: function(){
      document.querySelector(".overlay").classList.toggle("active");
      document.getElementById("cart-bag").classList.toggle("-active");
      document.getElementById("cart-bag").classList.contains("-active") ? document.querySelector(".overlay").addEventListener("click", this.toggleCart.bind(this)) : document.querySelector(".overlay").removeEventListener("click", this.toggleCart.bind(this))
    },
    updateItem: function(id,q){
      jQuery.post('/cart/update.js',{
        updates: {[id]: q}
      }).then((res) => {
        this.getCart();
      });
    },
    itemAdded: function(){
      this.getCart();
      this.toggleCart();
    },
    checkDiscountedInCart: function(){
      if(this.discounted.product_id.length == 0){
      	return;
      }
      this.items.forEach((item) => {
        console.log(item.id, this.discounted.product_id);
        if(item.id == this.discounted.product_id){
          this.discountedInCart = true;
        }
      });
    },
    checkDiscounted: function(){
      if(this.discounted.product_id.length == 0 || this.discounted.price_range.length == 0){
      	return;
      }
      let range = parseInt(this.discounted.price_range);
      let totalPrice = this.summary.total;
      if(this.discountedInCart){
      	totalPrice = totalPrice - this.discounted.product_price;
      }
      this.cart_original_total = totalPrice;
      console.log('PriceRange>>>',range,'TotalPrice',totalPrice,'InCart>>',this.discountedInCart);
      if(totalPrice >= range){
        if(!this.discountedInCart){
          console.log('Added');
          jQuery.post('/cart/add.js', {
            items: [
              {
                quantity: 1,
                id: this.discounted.product_id
              }
            ]
          }).then(res=>{
            this.discountedInCart = true;
            this.updateCart()
          });
        }
      }else if(totalPrice < range ){
        if(this.discountedInCart){
          console.log('Removed');
          jQuery.post('/cart/update.js', {updates: {[this.discounted.product_id]: 0}})
          .then(res=>{
            this.discountedInCart = false;
            this.updateCart();
          });
        }
      }
    }
  },
  created(){
  	this.getCart();
    for (var e = document.querySelectorAll('a[href="/cart"]'), n = 0; n < e.length; n += 1)
      e[n].addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleCart();
    });
  }
});


//Range slider

var rangeSlider = document.getElementById("rs-range-line");
if(rangeSlider != null){
  const min = rangeSlider.min;
  const max = rangeSlider.max;
  const value = rangeSlider.value;
  rangeSlider.style.background = `linear-gradient(to right, red 0%, red ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`;
  rangeSlider.addEventListener("input", showSliderValue, false);
  function showSliderValue() {
    this.style.background = `linear-gradient(to right, red 0%, red ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
  }
  
  let currentValue = 0;
  rangeSlider.onclick = function(e) {
    currentValue = 1 - currentValue;
    e.target.value = currentValue;
    return false;
  }

}


//Product Card Add to cart method
$(document).on('click','.product-card-add-to-cart--js',function(e){
  
	e.preventDefault();
  	let formData = {
     'items': [{
      'id': $(this).data('id'),
      'quantity': 1
      }]
    };
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .then(data=> {
    	console.log(data);
      minicart.itemAdded();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

$(document).on('submit','.product-form',function(e){
	jQuery.post('/cart/add.js', $(this).serialize())
    .then(res => {
    	minicart.itemAdded();
    });
});
# ComfySloth

<br>

<h3>
ComfySloth is an E-commerce Website for selling furniture,powered by React  
,and consumes json data from a Api endpoint,the app has sing in/out with auth0, persist cart data using localStorage browser api,and use react Context with redux pattern to manage the app state .
</h3>
<br>

[**\_Live Version\_\_**](https://comfy-sloth-maher.netlify.app/)

## features

- singing in/out with E-mail/google/facebook/twitter using auth0
- checking out and paying with credit card using stripe
- persisting cart items in localStorage
- filtering products by price/category / color/ ect...
- responsive in all devices
- subscribing to letter news with email
- JSON-provided data

<br>

## tools & frameworks used

<ul >
	<li style='display:flex;justify-content:start;align-items:center;'>react
		<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" style="height: 25px; border-radius: 5px; margin: 2px" alt="react" />
	</li>
    <li style='display:flex;justify-content:start;align-items:center;'>styled component
		<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" style="height: 25px; border-radius: 5px; margin: 2px" alt="styled component" />
	</li><li style='display:flex;justify-content:start;align-items:center;'>stripe
		<img src="https://img.shields.io/badge/strapi-2e7eea?style=for-the-badge&logo=strapi&logoColor=white" style="height: 25px; border-radius: 5px; margin: 2px" alt="stripe" />
	</li><li style='display:flex;justify-content:start;align-items:center;'>auth0
		<img src="https://miro.medium.com/max/3150/1*kofg5S-_kcyij3HL-uCnZA.png" style="height: 25px; border-radius: 5px; margin: 2px" alt="auth0" />
	</li>
	<li style='display:flex;justify-content:start;align-items:center;'>axios
		<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oGEXGSkH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iu70z7h4vp482ptvsw3d.png" style="height: 25px; border-radius: 5px; margin: 2px" alt="axios" />
	</li>
	<li style='display:flex;justify-content:start;align-items:center;'>react-router
		<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" style="height: 25px; border-radius: 5px; margin: 2px" alt="react router" />
	</li>
	<li style='display:flex;justify-content:start;align-items:center;'>netlify
		<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" style="height: 25px; border-radius: 5px; margin: 2px" alt="netlify" />
	</li>
    <li style='display:flex;justify-content:start;align-items:center;' >dotenv</li>
    <li style='display:flex;justify-content:start;align-items:center;' >react-icons</li>

</ul>
<br>

## how to use

    just login and start shopping

<br>
<hr/>
<br>

<div style='text-align:center;font-size:20px;'>Home</div>
&nbsp;
<div>
	<img
		src="./public/md-img/home-page.png"
		alt="Home page"
		style="width: 100%; margin: 5px; border-radius: 20px"
	/>
	<div style="text-align: center;font-size: 25px;color: antiquewhite;">
		home page without signing in.   
	</div>
</div>
<br>

<hr/>
<br>
<div style='text-align:center;font-size:20px;'>products page</div>
&nbsp;
<div>
	<img
		src="./public/md-img/products.png"
		alt="products page"
		style="width: 100%; margin: 5px; border-radius: 20px"
	/>
	<div style="text-align: center;font-size: 25px;color: antiquewhite;">
		products page in list mode and no filters applied .  
	</div>
</div>
<br>

<hr/><br>

<div style='text-align:center;font-size:20px;'>single product page</div>
&nbsp;
<div>
	<img
		src="./public/md-img/single-product.png"
		alt="single-product page"
		style="width: 100%; margin: 5px; border-radius: 20px"
	/>
	<div style="text-align: center;font-size: 25px;color: antiquewhite;">
		a detailed page for a product after routing to it and displaying all it's info .
	</div>
</div>

<br>
<div style='text-align:center;font-size:20px;'>stripe test payment</div>
&nbsp;
<div>
	<img
		src="./public/md-img/stripe.png"
		alt="stripe test payment"
		style="width: 100%; margin: 5px; border-radius: 20px"
	/>
	<div style="text-align: center;font-size: 25px;color: antiquewhite;">
		Stripe dashboard confirmation that a payment is successful.
	</div>
</div>
<br>

<br>

<h3>
<h2>ComfySloth is : </h2>
A React-based, fully responsive website that uses JSON data and combines creative & responsive design along with, best quality furniture.
</h3><br>

<hr/>
<br>

## installation

this application was bootstrapped by CRA .

to install dependencies run:

> npm install

to run the app in **development** mode ,run:

> npm run dev

<br>
<br>

## Contributing

Contributions are certainly welcome. Please feel free to open an issue/PR if there is something you would like to be changed.

<br>

## **_file structure_**

```bash
.
│── functions
│   └── create-payment.js
├── netlify.toml
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └──index.html
│  
├── README.md
└── src
    ├── actions.js
    ├── App.js
    ├── assets
    │   ├── hero-bcg-2.jpeg
    │   ├── hero-bcg.jpeg
    │   └── logo.svg
    ├── components
    │   ├── AddToCart.js
    │   ├── AmountButtons.js
    │   ├── CarContent.js
    │   ├── CartButtons.js
    │   ├── CartColumns.js
    │   ├── CartItem.js
    │   ├── CartTotals.js
    │   ├── Contact.js
    │   ├── Error.js
    │   ├── FeaturedProducts.js
    │   ├── Filters.js
    │   ├── Footer.js
    │   ├── GridView.js
    │   ├── Hero.js
    │   ├── index.js
    │   ├── ListView.js
    │   ├── Loading.js
    │   ├── Navbar.js
    │   ├── PageHero.js
    │   ├── ProductImages.js
    │   ├── Product.js
    │   ├── ProductList.js
    │   ├── Services.js
    │   ├── Sidebar.js
    │   ├── Sort.js
    │   ├── Stars.js
    │   └── StripeCheckout.js
    ├── context
    │   ├── cart_context.js
    │   ├── filter_context.js
    │   ├── products_context.js
    │   └── user_context.js
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── AboutPage.js
    │   ├── AuthWrapper.js
    │   ├── CartPage.js
    │   ├── CheckoutPage.js
    │   ├── ErrorPage.js
    │   ├── HomePage.js
    │   ├── index.js
    │   ├── PrivateRoute.js
    │   ├── ProductsPage.js
    │   └── SingleProductPage.js
    ├── reducers
    │   ├── cart_reducer.js
    │   ├── filter_reducer.js
    │   └── products_reducer.js
    └── utils
        ├── constants.js
        ├── helpers.js
        └── mock.js

```

<hr/>

## Acknowledgements

Great thanks to:

1. [john smilga](https://www.johnsmilga.com/)
2. [the odin project](wwww.theodinproject.com)
<br>
<hr >
<br>

## License

[MIT](./LICENSE.md)

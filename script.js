//fetch api
const API = fetch("https://free-food-menus-api-production.up.railway.app/burgers");
let arr = [];//empty array

//getMenu()
function getMenu(){
    return new Promise((resolve,reject) => {
        API
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            // console.log(data);//console data of object
            data.forEach(value => {
                arr.push(value);//data add in new array
                let show = document.querySelector('.data');
                const div = document.createElement('div');
                div.setAttribute('class','div-item');
                const img = document.createElement('img');
                img.setAttribute('src',`${value.img}`);
                const nm = document.createElement('p');
                nm.innerText = `Name : ${value.name}`;
                const dsc = document.createElement('p');
                dsc.innerText = `Title : ${value.dsc} `;
                const price = document.createElement('p');
                price.innerText = `$ ${value.price}`;
                const rating = document.createElement('p');
                rating.innerText = `Rating : ${value.rate}`;
                const country = document.createElement('p');
                country.innerText = `Stock : ${value.country}`;
                div.append(img,nm,dsc,price,rating,country);
                show.append(div);
            });
        });
        resolve(arr);
    });

}
//new Array Data : - 
console.log("Restaurent Data  Is : ",arr);

// Function 2: takeOrder()
function takeOrder(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            // random 3 data selected 
			const OrderFind = [];
            while (OrderFind.length < 3) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                if (!OrderFind.includes(arr[randomIndex])) {
                    OrderFind.push(arr[randomIndex]);
                }
            }
            let id = 1;
            console.log("Random Selected Order is ");
            OrderFind.map(value => {
                let show_order = document.querySelector('.select-item');
                const div = document.createElement('div');
                div.setAttribute('class','div-item');
                const img = document.createElement('img');
                img.setAttribute('src',`${value.img}`);
                const nm = document.createElement('p');
                nm.innerText = `Name : ${value.name}`;
                const dsc = document.createElement('p');
                dsc.innerText = `Title : ${value.dsc} `;
                const price = document.createElement('p');
                price.innerText = `$ ${value.price}`;
                const rating = document.createElement('p');
                rating.innerText = `Rating : ${value.rate}`;
                const country = document.createElement('p');
                country.innerText = `Stock : ${value.country}`;
                div.append(img,nm,dsc,price,rating,country);
                show_order.append(div);
                console.log(id,value.id,value.name,value.dsc,value.price,value.rate);
                id++;
            });
            let your_order = {OrderFind: OrderFind};
			resolve(your_order);
		}, 2500);
	});
}

// orderPrep()
function orderPrep(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("When Order Prepare then status is : ",{order_status:true, paid:false});
            resolve({order_status:true, paid:false});
        },1500);
    });
}

// payOrder()
function payOrder(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("When payment paid then status is : ",{order_status:true, paid:true});
            //in html show 
            let pay_order = document.querySelector('.status');
            const div = document.createElement('div');
            div.setAttribute('class','pay');
            const nm = document.createElement('p');
            nm.innerText = `Order Status : YES`;
            const pt = document.createElement('p');
            pt.innerText = `Payment : YES `;
            div.append(nm,pt);
            pay_order.append(div);
            resolve({order_status:true, paid:true});
        },1500);
    });
}

// thankyouFnc()
function thankyouFnc(){
    return new Promise((resolve,reject)=>{
        console.log("Payment recieved Successfull.... \n Thank You... and  visit Agian");
        //in html show 
        let greet = document.querySelector('.greet');
        const div = document.createElement('div');
        div.setAttribute('class','grt');
        const pic = document.createElement('img');
        pic.setAttribute('src','https://m.media-amazon.com/images/I/51Apm9WRnkL._SX679_.jpg');
        div.append(pic);
        greet.append(div);
        resolve(alert("Thank You..... Visit Again....."));
    },1500);
}

getMenu().then((arr)=>takeOrder(arr))
.then(()=>orderPrep())
.then(() => payOrder())
.then(() => thankyouFnc())
.catch((error) => {
    console.log("ERROR....",error);
});


// getMenu();
// takeOrder();
// orderPrep();
// payOrder();
// thankyouFnc();
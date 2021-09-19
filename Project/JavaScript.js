
function Search(){
    let Catarr=['cat','Cat','CAT','cats','Cats','CATS'];
    let Dogarr=['dog','Dog','DOG','dogs','Dogs','DOGS'];
    let value=document.getElementById("search").value;
    let checkcat=false;
    let checkdog=true;
    if(value!==""){
    for(let i of Dogarr){
        if(i===value){
            checkdog=true
            break;
            
        }
        else{
            checkdog=false;
        }
    }
    if(checkdog===true){
        location.replace('Dogs.html');
    }
    else if(checkdog===false){
        document.getElementById("Content").innerHTML="<br><br><h1 class='title'>Opps Something Went Wrong (No result found)</h1>";
    }
    
    for(let i of Catarr){
        if(i===value){
            checkcat=true
            break;
            
        }
        else{
            checkcat=false;
        }

    }
    if(checkcat===true){
        location.replace('Cats.html');
    }
    else{
        document.getElementById("Content").innerHTML="<br><br><h1 class='title'>Opps Something Went Wrong (No result found)</h1>";
    }

}

}

function CatDryFood(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div>"
+"<div class='description'><h3>Description</h3><p style='font-family:Oswald;'>Leonardo Adult 32/16 is a great-tasting, balanced dry cat food that contains all the important vitamins, minerals and nutrients that your cat needs to stay healthy. This wholesome food is particularly well-suited to cats with low activity levels thanks to its very moderate fat content of only 16%."
+"The food’s main source of protein is delicious, premium-quality poultry meat that is well-accepted and easy to digest. This poultry meat is suitable for human consumption and is composed primarily of lean muscle meat, with only a small proportion of bone meal. Leonardo Adult 32/16 also contains nutritious herring, which is dried and ground only a few hours after it has been caught. Herring is not only an excellent source of protein, but also contains important omega-3 and omega-6 fatty acids."
+"The added taurine in Leonardo Adult 32/16 can support your cat's eyesight and heart muscle function, while the included malt contains valuable natural enzymes and has an extra delicious taste. Brewer's yeast contains high levels of natural B vitamins, amino acids, trace elements and minerals that can promote the development of your cat's immune system. These vital nutrients can also have a positive effect on your cat's skin and coat, as well as on its general wellbeing."
+"Linseed has a 40% fat content made up of 90% unsaturated fatty acids, including over 50% omega-3 fatty acids. Chicory contains valuable inulin, which has a prebiotic effect, supporting healthy bacteria and helping to prevent the spread of pathological bacteria in the intestines. As a result, this dry cat food can help to promote a balanced gut flora."
+"Leonardo Adult 32/16 at a glance:"
+"Ideal for adult cats with low activity levels. Made in Germany.High-quality poultry meat: Easy to digest, well-accepted and extra tasty. Suitable for human consumption. High proportion of lean muscle meat.Freshly prepared herring: Delicious taste. Rich in nutritious proteins, omega-3 and omega-6 fatty acids. Promotes a healthy heart and good circulation, and can help to relieve skin inflammations.Rich in taurine: Supports your cat's eyesight and heart function.Malt: Easy to digest and contains important natural enzymes. Especially appealing taste for cats.Chicory: Source of prebiotic inulin, which supports healthy bacteria and helps to prevent the spread of pathological bacteria in the intestines, promoting a balanced gut flora.Linseed: 40% fat content, made up of 90% unsaturated fatty acids, including over 50% omega-3 fatty acids. Can have an anti-inflammatory effect, helping to relieve allergies. Contains natural mucilages that can have a positive effect on your cat's digestion.Brewer’s yeast: Source of high-quality proteins and vital nutrients, such as natural B vitamins, amino acids, trace elements and minerals. Can have a positive effect on your cat's skin, coat, immune system and general vitality.No artificial colours, flavours or preservatives.</p><br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}


/***************************************Cat-Box***********************************************************************/



function CatBox(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>Pixi Cat Litter Box(52*38*39)cm - Different Colours Dimensions: 52cm x38cm x39cm Plastic bio-toilet will help protect the house from unpleasant odors and will have to be liked even by the most fastidious pets. In contrast to conventional trays, the bio-toilet -PIXI- has a special filter that quickly absorbs liquid and neutralizes unpleasant smells, a door through which the pet can easily get inside, as well as a convenient handle that covers the transportation process.With the bio-toilet -PIXI- your pet will always feel comfortable, and you will not have to clean up the tray several times a day. The filter suffices for a long time!</p><br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}

/***************************************************Cat-Toys*************************************************************/

function CatToys(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>The Kitty KONG is a toy and treat dispenser designed specifically to tap into the natural curiosity and hunting instincts of your cat. Squeeze a little of the KONG Easy Treat into the KONG for your cat to enjoy. You can also use a pinch of catnip or your cat’s favorite dry kibble inside this versatile toy. With its lightweight construction, the KONG toy can be batted, rolled or bounced by your cat Unpredictable bounce Durable treat dispenserInsert treats or catnipFulfills natural instincts</p><br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}




/************************************************************Bowls******************************************************/

function Bowls(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>Capacity - 1.8 L Color - Silver Material - Stainless Steel Shape - Round Diameter of top edge - 25 cm Diameter of base - 32 cm Height - 7 cm</p> <br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}

/****************************************************Dog Dry Food********************************************************/

function DogFood(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>MERA pure sensitive goody snacks are the ideal treat for sensitive dogs who suffer from allergies or food intolerances. For their daily reward A source of animal protein & a source of carbohydrate Recipe without ingredients containing gluten LID - Limited Ingredient Diet That is why our recipe deliberately avoids using: Wheat and barley, exotic meat sources, colourings, flavourings and preservatives, genetically modified ingredients, sugar, soy, vitamin K3</p> <br><p style='color:green; font-weight:bolder;'>Price: <strike style='color: red; font-weight: bolder;'>"+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}
function DogFood2(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>MERA pure sensitive goody snacks are the ideal treat for sensitive dogs who suffer from allergies or food intolerances. For their daily reward A source of animal protein & a source of carbohydrate Recipe without ingredients containing gluten LID - Limited Ingredient Diet That is why our recipe deliberately avoids using: Wheat and barley, exotic meat sources, colourings, flavourings and preservatives, genetically modified ingredients, sugar, soy, vitamin K3</p> <br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}



/****************************************************Dog-Toys*************************************************************/
function DogToys(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>Suprium Rubber Dog Toy YPTPRCT009 - 15cm</p> <br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}


/***********************************************************Dog-Beds*******************************************************/

function DogBeds(image,price){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='"+image+"' width='100%'></div><div class='description'><h3>Description</h3><p style='font-family:Oswald;'>Dimensions : 50 x 35 x 20 cm <br>Black Stripes: A double faced comfortable bed made from a waterproof material and soft fiber stuffing Which makes it comfortable and easy to clean with soap and water. Its borders were specially made to provide extra support to your pet.<br>Blue Stripes: A double faced comfortable bed made from nylon, waterproof material and soft fiber stuffing Which makes it comfortable and easy to clean with soap and water. Its borders were specially made to provide extra support to your pet</p> <br><p style='color:green; font-weight:bolder;'>Price: "+price+" EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}


/**************************************************************Home****************************************************/

function Home1(){
    let qry="<div class='container-fluid'><div class='gallery3'><img src='Images/homedog3.jpg' width='100%'></div><div class='description'><h3>Description</h3><p>Frontline Fleas & Ticks Spray for dogs and cats 250ml<br>What is Frontline Spray?<br>Frontline Spray provides long-lasting, effective control of fleas and ticks on your pet. It kills up to 100% of existing fleas in less than 24 hours. Frontline Spray continues killing fleas for an entire month or more.<br>For:<br>Cats and Dogs<br>Benefits:<br>Effective against severe existing flea and tick infestations, and kills chewing lice<br>Effective against all stages of ticks, including deer ticks (the major carrier of Lyme disease)<br>Helps control sarcoptic mange infestations<br>Remains waterproof for 30 days, even if your dog or cat swims or is bathed.</p><br><p style='color:green; font-weight:bolder;'>Price: 925 EGP</p><br><button id='searchbtn'><i class='fas fa-cart-plus'></i> Add to Cart</button></div></div>";

    document.getElementById("Content").innerHTML=qry;
}
/*****************************************************************Support************************************************/

function Support1(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Remove your email from someone else's account</h1><ol><li>Open an email you received from PetShop</li><li>Click Unsubscribe at the bottom of the email</li><li>Didn’t sign up for PetShop? Let us know when PetShop opens on the screen</li><li>Click Remove my email address</li></ol><br>After you unsubscribe, you might still receive an email or two as it takes a few days for our email system to update.Other articles<br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support2(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Edit notification settings</h1><ol><li>Log into your PetShop account</li><li>Click at the top of PetShop to open your menu</li><li>Click Settings</li><li>Click Done</li></ol><br><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support3(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Log in and out of Dogs Shop</h1><b>Log into your personal or business account</b><br><ol><li>Go to petshop.com/login</li><li>Enter your email address and password or click Continue with Facebook or Continue with Google</li><li>Click Log in</li></ol>If you are having trouble logging in, read this article to find what best matches your experience.<br><b>Log out from your personal or business account</b><br><ol><li>Click the directional chevron down icon at the top-right of the screen to open your menu</li><li>Click Log out</li></ol><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support4(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Access, edit or delete personal data</h1>You can edit or delete your data from PetShop by contacting our support team. Find the option below that best applies to you. Then click the link, fill out your information and a member of our team will be in touch.<br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support5(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Personalization and data</h1>We want to provide you with the most interesting content when you use PetShop. Sometimes we use information from PetShop site features like the Save button to do this. Our advertising partners may also give us information about your off-PetShop activity to give you better personalized ads. You can choose whether we use the information to customize PetShop for you by going to your account settings.<br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support6(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Personalized ads</h1>To help you see ads you’re more likely to be interested in, PetShop or a company advertising on PetShop may use information about your off-PetShop activity to personalize the ads you see.<br>For example:<br><ul><li>A company advertising on Pinterest might share a list of customer email addresses with us. And if their customers are on Pinterest, we can show them more relevant ads.</li><li>They can use a Pinterest tag on their website, or send us information from their mobile app, to help us understand who’s visited or made purchases on their site or app. We can use that information to show ads to the right people on Pinterest. For instance, this way you might get an ad for a pair of shoes you checked out, but didn’t buy.</li></ul><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support7(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Find and follow Shops</h1><ol><li>Log into your PetShop account</li><li>Enter a person’s name or PetShop username in the search bar and press enter on your keyboard</li><li>Select  People from the menu next to the search bar</li><li>Click on a profile picture to open the profile</li><li>Click Follow at the bottom of their profile description</li></ol><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support8(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>Send messages</h1><ol><li>Click message at the top of any PetShop page</li><li>Click inbox in the top right corner of the Inbox </li><li>Search to find and select up to 10 friends</li><li>Write your message at the bottom where it says Add a message or click   to send messages</li><li>Press send to send</li></ol><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}
function Support9(){
    let qry="<br><div class='container-fluid'><div class='gallery4'><h1>See your following and followers</h1><b>See your followers</b><ol><li>Log into your PetShop account(opens in a new window)</li><li>Click on your profile picture in the top-right corner of the screen to go to your profile</li><li>Click Followers under your name to see your followers</li></ol><b>See who you're following</b><ol><li>Log into your PetShop account</li><li>Click on your profile picture in the top-right corner of the screen to go to your profile</li><li>Click Following under your name to see the people and boards you’re following</li></ol><br><br><br><br><br><br><br></div>";

    document.getElementById("Content").innerHTML=qry;
}

function ASK(){
    let value="";
     value=document.getElementById("ask").value;
    if(value!==""){
    document.getElementById("Content").innerHTML="<br><br><h1 class='title'>We've got Your Message our Support Team Will Contact You As soon as they can</h1><br><br><br><br>";
    }
}
var reg={first_name:"",last_name:"",email:"bahy713@gmail.com",pass:"bahy123",phone:null,date:"",gender:""};
var mail="";
function SaveData(){
    reg.first_name=document.getElementById("firstname").value;
    reg.last_name=document.getElementById("lastname").value;
    reg.email=document.getElementById("email").value;
    reg.pass=document.getElementById("password").value;
    reg.phone=document.getElementById("phone").value;
    reg.date=document.getElementById("date").value;
    reg.gender=document.getElementById("gender").value;
    mail=document.getElementById("email").value;
    location.replace('Login.html');
    
}
function CheckData(){
    console.log(reg.first_name+"\n"+mail);
    if(document.getElementById("email").value===reg.email&&document.getElementById("password").value===reg.pass){
        location.replace('Home.html');
    }
    else{
        alert("Invalid Input");
    }
}
var counter=1;
function SlideShow(){
    setTimeout(SlideShow,3000);
    
}
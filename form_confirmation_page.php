<html lang="eng">
<body>
<style>
    <?php include 'stylesheet.css'; ?>
</style>

<!--Header - Logo, Navigation & Socials-->
<div class="top_bar">

    <div class="top_bar_column logo"><a href="index.html"><h1>Petite Treats</h1></a></div>

    <div class="top_bar_column navigation">
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="specials.html">Specials</a>
        <a href="contact_us.html">Contact Us</a>
        <a href="sign_up.html" class="active">Sign Up</a>
    </div>

    <div class="top_bar_column social_icons">
        <a href="https://www.facebook.com/"><img src="petite_treats_images/facebook_icon35x35.png"
                                                 alt="https://www.iconfinder.com/icons/4362964/facebook_fb_logo_social_media_icon"></a>
        <a href="https://www.twitter.com/"><img src="petite_treats_images/twitter_icon35x35.jpg"
                                                alt="http://clipart-library.com/clip-art/twitter-bird-transparent-background-15.htm"></a>
        <a href="https://www.instagram.com/"><img src="petite_treats_images/instagram_icon35x35.png"
                                                  alt="https://www.stickpng.com/img/icons-logos-emojis/tech-companies/instagram-logo"></a>
    </div>
</div>

<hr id="header_break">

<div class="stand_out">
    <h1>Thank you for signing up for the Petite Treats Weekly newsletter.</h1>
    <p>We have added the following information to our files regarding your interests:</p>
</div>

<!--Outputs From Form-->
<div class="form_outputs">
    <?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $name_str = $first_name . " " . $last_name;
    echo "Name: " . $name_str; ?><br>

    Email: <?php echo $_POST["email"]; ?><br>

    <?php
    $products = $_POST["products"];
    $number_of_selections = count($products);

    echo("Product interests: " . "<br>");
    for ($index = 0; $index < $number_of_selections; $index++) {
        echo("- " . $products[$index] . "<br>");
    } ?>

    <?php
    $birthday_day = $_POST["birthday_day_drop_down"];
    $birthday_month = $_POST["birthday_month_drop_down"];
    ?>
    Birthday: <?php echo($birthday_month . " " . $birthday_day) ?>
</div>

<h1>Welcome to the Family!</h1>
<a href="index.html">
    <button class="attractive">Back to Homepage</button>
</a>

<!--Footer - Business Contacts & Navigation-->
<div class="footer">
    <p>Contacts: 0455 5555 555 | Catering: 0433 3333 333 | Address: 123 Prize Lane, Kirwan,<a href="index.html">Home</a>
        <a href="products.html">Menu</a> <a href="specials.html">Specials</a> <a href="contact_us.html">About Us</a></p>
</div>
</body>
</html>

</body>
</html>


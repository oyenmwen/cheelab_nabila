$(document).ready(function() {
    $("#left-btn").mouseover(()=>{
        $("#left-img").attr("src","images/cake-arrow-white.png");

    });

    $("#left-btn").mouseout(() => {

        $("#left-img").attr("src","images/cake-arrow-green.png");

    });

    $("#right-btn").mouseover(()=>{
        $("#right-img").attr("src","images/cake-arrow-white.png");

    });

    $("#right-btn").mouseout(() => {

        $("#right-img").attr("src","images/cake-arrow-green.png");

    });

    let degrees = 0;
    let people = [
        {
            name: "Melissa",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/melissaAsset+9.png",
        },
        {
            name: "Justice",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/justiceAsset+8.png",
        },
        {
            name: "Mikayla",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/mikaylaAsset+7.png",
        },
        {
            name: "Bianca",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/biancaAsset+6.png",
        },
        {
            name: "Duncan",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/duncanAsset+5.png",
        },
        {
            name: "Nikita",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/nikitaAsset+4.png",
        },
        {
            name: "Marina",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/marinaAsset+3.png",
        },
        {
            name: "Kayla",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/kaylaAsset+2.png",
        },
        {
            name: "Aditi",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/aditiAsset+1.png",
        },
        {
            name: "Persephone",
            img: "https://cheelab-image-bucket.s3.us-east-2.amazonaws.com/persephoneAsset+10.png",
        }
    ];

    const angle = 360/people.length;


    let current_index = 0;

    $(".right").click(e => {
        degrees += angle;
        current_index += 1;
        if(current_index == people.length){
            current_index = 0;
        }
        rotate();
    });

    $(".left").click(e => {
        degrees -= angle;
        current_index -= 1;
        if(current_index < 0){
            current_index = people.length - 1;
        }
        rotate();
    });

    $("#open").click(()=>{
        document.getElementById("mySidenav").style.width = "250px";
    });
    /* Set the width of the side navigation to 0 */
    $("#close").click(()=>{
        document.getElementById("mySidenav").style.width = "0";

    });

    function rotate(){
        $("#wheel").css({
            transform: "rotate(" + degrees + "deg)",
            "-ms-transform": "rotate(" + degrees + "deg)",
            "-moz-transform": "rotate(" + degrees + "deg)",
            "-webkit-transform": "rotate(" + degrees + "deg)",
            "-o-transform": "rotate(" + degrees + "deg)"
        });

        $("#middle").attr("src",people[current_index].img);


        $("#name").val(people[current_index].name);

    }
});

let num_image=0;
let images=document.querySelectorAll(".image");
let kol_images=images.length;
let gallery=document.querySelector(".gallery");
let main=document.querySelector(".main");
let btn01=document.getElementById("prev");
let btn02=document.getElementById("next");

function update()
{
    let offset=-num_image*100;
    gallery.style.transform=`translateX(${offset}%)`;
}

function next()
{
    if (num_image<kol_images-1)
    {
        num_image=num_image+1;
    }
    else
    {
        num_image=0;
    }
    update();
}
btn02.addEventListener("click",next);

function prev()
{
    if (num_image>0)
    {
        num_image=num_image-1;
    }
    else
    {
        num_image=kol_images-1;
    }
    update();
}
btn01.addEventListener("click",prev);
function template(M_img, capsule_duration, M_title, C_name, view_num, period_ago) {

    let views;
    if (view_num < 1000) {
        return view_num
    }
    else if (1000 >= view_num < 1000000) {
        return view_num / 1000 + "k"
    }
    else {
        return view_num / 1000000 + "M"
    }


    let html =
        `<div class="cover">
<div class="img">
<img src="${M_img}"
alt="An Image of Sigma Web Development Batch Tutoria - 82">
<span>${capsule_duration}</span>
</div>

<div class="rightdetails">
<h4>${M_title}</h4>
<p>${C_name} . ${views} views . ${period_ago} months ago</p>
</div>
</div>`

    document.querySelector('.cont').innerHTML = document.querySelector('.cont').innerHTML + html
}

template("https://i.ytimg.com/vi/tcQDnqRakxk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBN1K3dPZTQjKgnhXhTlP-GjAELEw", "14:23", "Advaced JavaScript | Sigma Web Development Course - Tutorial 82", 5000000, 13)
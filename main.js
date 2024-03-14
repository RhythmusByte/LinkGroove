const shareButtons = document.querySelectorAll('.share-btn')
console.log(shareButtons)

async function copyText(e) {
e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link")
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

window.onscroll = function() {
      if (window.scrollY > 50) {
        document.querySelector(".header").classList.add("scrolled");
      } else {
        document.querySelector(".header").classList.remove("scrolled");
      }
    };

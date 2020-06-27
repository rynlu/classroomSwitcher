url = window.location.href

if (!url.includes("https://classroom.google.com/u/1/")){
    newUrl = url.replace(/[0-9]/, '1');
    document.location.href = newUrl;
}
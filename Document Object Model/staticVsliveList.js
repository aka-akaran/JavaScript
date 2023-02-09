// querySelectorAll -->static list
// getElementsBySomething -->live list



const navItems = document.querySelector(".nav-items") ;



const navItemsStaticList = navItems.querySelectorAll("li") ;
const li = document.createElement("li") ;
li.textContent = "new Nav Item" ;
navItems.append(li) ;

console.log(navItemsStaticList) ;
// it will result list of size 3, even after adding new list item -->static list 






const navItemsLiveList = navItems.getElementsByTagName("li") ;
const li2 = document.createElement("li") ;
li2.textContent = " next new Nav Item" ;
navItems.append(li2) ;

console.log(navItemsLiveList) ;
// it will result in live list
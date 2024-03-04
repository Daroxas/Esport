function slidemenu()
{
  var sideMenu = document.getElementById('sideMenu');
  if (sideMenu.style.right === '0px') 
  {
    sideMenu.style.right = '-250px'; // Slide out the menu
  } 
  else 
  {
    sideMenu.style.right = '0px'; // Slide in the menu
  }
}
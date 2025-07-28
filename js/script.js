$(function () {
  const fallbackData = [
    { name: "Chicken", short_name: "C" },
    { name: "Beef", short_name: "B" },
    { name: "Sushi", short_name: "S" },
    { name: "Pasta", short_name: "P" },
    { name: "Pizza", short_name: "Z" },
    { name: "Biryani", short_name: "BR" }
  ];

  const imageUrls = [
    "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", // Chicken
    "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg", // Beef
    "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg", // Sushi
    "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg", // Pasta
    "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", // Pizza
    "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"  // Biryani
  ];

  $.getJSON("https://davids-restaurant.herokuapp.com/categories.json")
    .done(function (data) {
      renderCategories(data);
    })
    .fail(function () {
      console.warn("API failed — using fallback data");
      renderCategories(fallbackData);
    });

  function renderCategories(data) {
    let content = "";
    data.forEach(function (category, index) {
      let imgSrc = imageUrls[index % imageUrls.length];
      content += `
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="category-tile" style="margin-bottom: 30px;">
            <img src="${imgSrc}" alt="${category.name}" class="img-responsive" style="width:100%; height:200px; object-fit:cover; border-radius:8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
            <h3 style="margin-top:15px;">${category.name}</h3>
            <p>Short Name: ${category.short_name}</p>
          </div>
        </div>`;
    });
    $("#menu-categories").html(content);
  }
});

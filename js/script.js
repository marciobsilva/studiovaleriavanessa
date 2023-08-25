function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")
}

function showDetails(element) {
  if ($(element).children("#icon")[0].name === "chevron-down-outline")
    $(element).children("#icon")[0].name = "chevron-up-outline"
  else $(element).children("#icon")[0].name = "chevron-down-outline"

  $(element)[0].classList.toggle("active")

  $(element)
    .parent("#details")
    .children("#box-info")
    .children()
    .slideToggle(500)
}

$(document).ready(function () {
  infoData.map((data) => {
    new_element = $("#clone").clone(true)
    new_element.show()
    new_element
      .children("#details")
      .children("#box-title")
      .children("#title")
      .html(data.title)
    new_element
      .children("#details")
      .children("#box-info")
      .children("img")
      .attr("src", data.img_src)
    new_element
      .children("#details")
      .children("#box-info")
      .children("#info-text")
      .children("#info")
      .html(data.info)
    new_element
      .children("#details")
      .children("#box-info")
      .children("#info-text")
      .children("#first_time_value")
      .html(data.first_time)
    new_element
      .children("#details")
      .children("#box-info")
      .children("#info-text")
      .children("#eyelash_maintenance_1")
      .html(data.eyelash_maintenance_1)
    new_element
      .children("#details")
      .children("#box-info")
      .children("#info-text")
      .children("#eyelash_maintenance_2")
      .html(data.eyelash_maintenance_2)
    new_element
      .children("#details")
      .children("#box-info")
      .children("#info-text")
      .children("#eyelash_maintenance_3")
      .html(data.eyelash_maintenance_3)
    $("#clone").after(new_element)
  })
})

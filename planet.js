$.getJSON('https://api.myjson.com/bins/9g2ka', function(data) {

    $(data).each(function(i, planet) {
      $('#planetsDetail').append($("<tr>")
        .append($("<td>").append(planet.name))
        .append($("<td>").append(planet.rotation_period))
        .append($("<td>").append(planet.orbital_period))
        .append($("<td>").append(planet.diameter))
        .append($("<td>").append(planet.climate))
        .append($("<td>").append(planet.gravity))
        .append($("<td>").append(planet.terrain))
        .append($("<td>").append(planet.surface_water))
        .append($("<td>").append(planet.population))
        .append($("<td>").append(planet.residents))
        .append($("<td>").append(planet.films))
        .append($("<td>").append(planet.created))
        .append($("<td>").append(planet.edited))
        .append($("<td>").append(planet.url)));
    });
  })

  .done(function() {
    alert("Completed");
  })
  .fail(function(e) {
    console.log('error:');
    console.error(e);
  })
  .always(function() {
    alert("always runs");
  });

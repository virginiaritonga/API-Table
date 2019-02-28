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
  
  $(document).ready(function(){
    $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });
});

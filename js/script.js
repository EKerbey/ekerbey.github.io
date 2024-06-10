$(document).ready(function(){
  $(document).ready(function() {
    function toggleElements() {
      if (window.innerWidth <= 768) {
        $('.a-col').hide();
        $('.a-data').hide();
    
        $('.b-col').hide();
        $('.b-data').hide();
    
        $('.c-col').hide();
        $('.c-data').hide();
    
        $('.d-col').hide();
        $('.d-data').hide();
    
        $('.e-col').hide();
        $('.e-data').hide();
    
        $('.f-col').hide();
        $('.f-data').hide();
    
        $('.company').hide();
        $('.company-data').hide();
      } 
      
      if (window.innerWidth >= 768) {
        $('.a-col').show();
        $('.a-data').show();
    
        $('.b-col').show();
        $('.b-data').show();
    
        $('.c-col').show();
        $('.c-data').show();
    
        $('.d-col').show();
        $('.d-data').show();
    
        $('.e-col').show();
        $('.e-data').show();
    
        $('.f-col').show();
        $('.f-data').show();
    
        $('.company').show();
        $('.company-data').show();
      }
    }
  
    // Call the function on page load
    toggleElements();
  
    // Bind the function to the window resize event
    $(window).resize(function() {
      toggleElements();
    });
  });
  
  
  var rows = $('table tbody tr');
    
  rows.each(function() {
    
    var aVal = $(this).find('#a').text();
    var bVal = $(this).find('#b').text();
    var cVal = $(this).find('#c').text();
    var dVal = $(this).find('#d').text();
    var eVal = $(this).find('#e').text();
    var fVal = $(this).find('#f').text();
  
    var overallVal = parseFloat(aVal) + parseFloat(bVal) + parseFloat(cVal) + parseFloat(dVal) + parseFloat(eVal);
  
    $(this).find('#overall').text(overallVal.toFixed(2));
  
  });
  
  function sortTableByOverall(tableId) {
    var table = $('#' + tableId);
    var tbody = table.find('tbody');
    tbody.append(tbody.find('tr').get().sort(function(a, b) {
      var aValue = parseFloat($(a).find('#overall').text());
      var bValue = parseFloat($(b).find('#overall').text());
      return bValue - aValue;
    }));
  }
  
  sortTableByOverall('myTable');
  
  var rows = $('table tbody tr');
  
  rows.each(function(index) {
    var positionVal = index + 1;
    $(this).find('.position-data').text(positionVal);
  });
});







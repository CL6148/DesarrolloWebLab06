$(document).ready(funtion() {
  $(".agregar").click(function() {
    $(".Lista").append('
      <div class="lis">
        <li>Item</li>
        <p>
          <button class="checar">
            check
          </button>
          <button class="del">
            delete
          </button>
        </p>
      </div>
    ');
  });
});

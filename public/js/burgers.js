$(function() {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            name: $("#input").val()   
    };
    

    //POST Request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Created New Burger");
            location.reload();
        }
    );
});

$(".devour").on("click", function(event) {
    event.preventDefault();

    const id = $(this).data("id");
    const newBurger = $(this).data("newburger");

    let newBurgerState = {
        devoured: newBurger
    };

    //PUT Request
        $.ajax("/api/burgers", {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Changed burger to", newBurger);
                location.reload();
            }
        );
    });
});
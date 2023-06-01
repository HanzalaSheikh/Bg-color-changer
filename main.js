const colorList = ['White', 'Black', 'Orange', 'Maroon', 'Red', 'Yellow', 'Lime', 'green', 'SalmonGreen', 'Sky', 'blue', 'Crimson', 'AquaGrey', 'Purple', 'Mustard', 'Peach', 'Violet', 'Magenta', 'Coral', 'Saffron', 'Brown', 'Pink', 'Tan', 'Teal', 'Navy', 'Blue', 'Turquoise', 'Lavender', 'Beige', 'Lemon', 'yellow', 'Grape', 'vine', 'Indigo', 'Fuchsia', 'Amber', 'Sea\'green', 'Dark\'green', 'Burgundy', 'harcoal', 'Bronze', 'Cream', 'Mauve', 'Olive', 'Cyan', 'Silver', 'Rust', 'Azure', 'Mint', 'Pearl', 'Ivory', 'Tangerine', 'Cherry', 'red', 'GarnetSapphire', 'Rosewood', 'Lilac', 'Arctic', 'blue', 'Pista', 'green', 'Coffee', 'brown', 'Umber', 'Brunette', 'Mocha', 'Ash', 'Jet', 'black'];
const col_length = colorList.length;
function bgColorChnage() {
    let color = colorList[
        Math.floor(Math.random()*col_length)
    ]
    document.body.style.backgroundColor = color;
    // document.getElementsByClassName('content').value = color;
};

function reset() {
    document.body.style.backgroundColor = 'White';
}





# unit-4-game
# Crystal collection game that challenges the user to match the random "magic" number that is generating by clicking on the image of a crystal that contains a hidden value. The value will only be revealed to the user when they click. The user wins by matching the Magic number and Crystal Count. If the user goes over they lose.
# The magic number is created using a math.random function specifying a range between 19 and 120
# The crystals are given their value with a math.random function specifying a range between 1 and 12
# A while loop is used to ensure that no crystal has the same value by pushing the assigned value to an empty array and checking that array before generating the next crystal's value
#The crystal value is then assigned to a data attribute which is converted to an integer in the on click event to add the crystal count score and append to the html
# Two if statement will check if the crystal count is either equal to or greater than the magic number. This will trigger an increment on the win or loss variable and reset the magic number and assign all new gem values
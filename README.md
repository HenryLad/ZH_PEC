# ZH_PEC
ZeHenkampf PunktE Calulator


This program is a point calculator for a decathlon event. 
It allows users to input their achieved values in various track and field competitions, such as sprints, jumps, throws, and hurdles.

The program consists of two main functionalities:

    Header Input: Users can enter the name of the competition they want to calculate points for. They submit this information, and the program displays the header with the entered competition name.

    Points Calculation: After entering the competition name, users can input their achieved value (e.g., time for sprints, distance for jumps and throws). 
    Upon submission, the program calculates and displays the points achieved by the athlete in that particular competition, based on predefined formulas for each event.

Additionally, the program provides a dropdown menu for users to select different competitions. This menu offers a convenient way to choose the event without having to type the name manually.

The design of the program includes a responsive layout using Bootstrap for styling. It consists of a navigation bar, input forms for competition selection and achieved value input, and a section to display the calculated points. The program also includes error handling to ensure that users provide valid inputs.

## Structue of the Code
   ##### HTML Structure:
        The HTML file (index.html) contains the structure of the webpage.
        It includes a navigation bar (navbar) with links to different sections of the page.
        There's a dropdown menu (dropdown-menu) listing various track and field competitions.
        Two input forms are provided: one for entering the competition name (HeaderInput) and the other for entering the achieved value (calInput).
        A container (container) is used to display the header and the calculated points.

   #####  JavaScript Functions:
        Header(): This function handles the submission of the competition name input form. It checks if a valid header is entered and displays it in the designated header section.
        CalPoints100(): This function handles the submission of the achieved value input form. It calculates the points achieved by the athlete based on the entered value and the selected competition. It then displays the calculated points in the designated points list.
        calculatePointsForRunning(A, B, C, x): This function calculates the points for running events based on the provided parameters (A, B, C, and the achieved value x).
        calculatePointsForJumpThrow(A, B, C, x): This function calculates the points for jumping and throwing events based on the provided parameters (A, B, C, and the achieved value x).

  #####  CSS Styling:
        The CSS file (style.css) contains styling rules for various elements of the webpage.
        It includes styling for spacing, padding, margins, font sizes, and alignment to ensure proper layout and presentation of the content.

  #####  Bootstrap:
        The webpage utilizes Bootstrap for styling and responsiveness.
        Bootstrap classes are applied to elements such as buttons, forms, navigation bars, and containers to achieve a consistent and visually appealing layout across different devices and screen sizes.

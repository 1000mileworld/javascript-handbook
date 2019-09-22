// ------------------------------ PART 1 ------------------------------

// *** HTML FOR REFERENCE *** 
<body>
  <h1 id="header">The Dom is cool for many reasons</h1>
  <ul class="list">
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>

// First, we create a p tag and store it in the variable 'para':
var para = document.createElement('p');

// Then we can modify the element’s content:
para.innerHTML = "This paragraph was made using JavaScript!"

// We can appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE ***
// .appendChild() adds a child element to whatever is being selected. 

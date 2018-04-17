  var quest = document.querySelector('ul');
             quest.addEventListener('click', function (event) {
                  if (event.target.tagName === 'LI') {
                     event.target.classlist.toggle('checked');
                  } else if (event.target.tagName === 'SPAN') {
                    var div = event.target.parentNode;
                    div.remove();
                  }
              },false);
                        
        
   function newElement () {
     /* 
     create variable li, which will create new element
     in list
     */
      var li = document.createElement('li');
     /* create variable, which links to Input */
      var myInput = document.getElementById('in').value;
     /* create variable, which creates a text and adss to the list */
      var myTask = document.createTextNode(myInput);
      li.appendChild(myTask);
     /* if we type nothing, alert a message */
      if(myInput ==='') {
        alert('Type your task!');
      } else {
        document.getElementById('questList').appendChild(li);
      }
      document.getElementById('in').value='';
      var span = document.createElement('SPAN');
      var txt = document.createTextNode('x');
      span.className = 'close';
      span.appendChild(txt);
      li.appendChild(span);
     
   }
    

        
      

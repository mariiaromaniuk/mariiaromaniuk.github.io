const button = document.getElementById('sendMessageButton');

button.addEventListener('click', evt => {
  evt.preventDefault();
  console.log('HELLO');

  let email = document.getElementById('emailAddress').value;
  let sender = document.getElementById('sender').value;
  let content = document.getElementById('emailContent').value;

  if (email && sender && content) {
    let templateParams = {
      email,
      sender,
      content,
    };

    let serviceId = 'default_service';
    let templateId = 'template_qbGQANvs';
    emailjs.send(serviceId, templateId, templateParams).then(
      function(response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function(error) {
        console.log('FAILED...', error);
      }
    );

    document.getElementById('emailAddress').value = '';
    document.getElementById('sender').value = '';
    document.getElementById('emailContent').value = '';

    location.hash = 'thanks';
    setTimeout(function() {
      location.hash = '';
    }, 5000);
    if (document.getElementById('addedNode')) {
      document.getElementById('addedNode').remove();
    }
  } else if (!document.getElementById('addedNode')) {
    let node = document.createElement('LI');
    node.innerText = 'Please fill out all fields before submitting!';
    node.id = 'addedNode';
    document.getElementById('contactActions').appendChild(node);
  }
});

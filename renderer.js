// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
console.log('response');

const func = async () => {
  try {
    const response = await window.versions.ping();
    console.log(response); // prints out 'pong'
  } catch (error) {
    console.error('Error:', error);
  }
};

func();

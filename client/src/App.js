import { useRef ,useState ,useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';



function App() {
  const[file ,setfile]=useState('');
  const [result ,setResult]=useState('');
   
  const fileInputRef=useRef();
  useEffect(()=>{
    const getImage= async ()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

         let reasponse =await uploadFile(data);
         setResult(reasponse.path);
      }
    }
    getImage();
  } ,[file])

  const onUploadClick =()=>{
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
         <img src='https://images.pexels.com/photos/4792284/pexels-photo-4792284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         alt='Banner'></img>
        <div className='wapper'>
            <h1>File Sharing </h1>
            <p>upload and Sharing The download link</p>

            <button onClick={()=>onUploadClick()}> Upload</button>

            <input type='file' 
               ref={fileInputRef} style={{display:'none'}}
               onChange={(e)=>setfile(e.target.files[0])}/>

               <a href={result} target='_blank'>{result}</a>
        </div>
    </div>
  );
}

export default App;

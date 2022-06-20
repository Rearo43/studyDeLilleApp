import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Alert,
  Modal,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'; 
 
 export default function SomeComponent() {  
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalData, setModalData] = useState(null);
   const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-40%, -10%)',
    },
  }
  return (
    <>
      <div className="container">
        {somedata.map(data => (
          <div className='item' key={data.id} >
            <img 
              src={data.img} 
              alt='' 
              onClick={()=> {
                setModalData(data);
                setModalIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <h1>{modalData.title}</h1>
        <p>{modalData.content}</p> 
        <div>
         <button onClick={() => setModalIsOpen(false)}>X</button>
        </div>
      </Modal>
    </>
  )
}
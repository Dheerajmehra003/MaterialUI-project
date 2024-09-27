import React, { useEffect, useState } from 'react'
import { Box, Button, Grid2, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { collection, getDocs, updateDoc, doc,} from 'firebase/firestore';
import {db} from '../FireBaseConfig'
import { useAppStore } from '../AppStore';
import Swal from "sweetalert2";

export default function EditForm({fid, closeEvent}) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const empCollectionRef = collection(db, "products");
    const setRows = useAppStore((state) => state.setRows);

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const createProduct = async() => {
     const userDoc = doc(db, "products", fid.id)
     const newFields = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
     }
     await updateDoc(userDoc, newFields);
     Swal.fire("Submitted", "Your Product have been Updated.","Success");
     closeEvent();
     setRows([]);
     getUsers();
    
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

     useEffect(()=>{
      console.log(fid)
      setName(fid.name);
      setPrice(fid.price);
      setCategory(fid.category);
     }, [])

  return (
    <>
    <Box sx={{m:2}}>
     <Typography variant='h5' align='center'>
        Edit Product
     </Typography>
     <IconButton
     sx={{position:'absolute', top:'0', right:'0'}}
     onClick={closeEvent}
     >
      <CloseIcon />
     </IconButton>
     <Box height={20}/>
     <Grid2 container spacing={2}>
     <Grid2 size={12}>
     <TextField 
        id="outlined-basic"
        label="Enter Product"
        variant="outlined"    
        value={name}
        onChange={handleName}
        sx={{minWidth:'100%'}}/>
        </Grid2>
     <Grid2 size={6}>
     <TextField 
        id="outlined-basic"
        type='number'
        label="Enter Price"
        variant="outlined" 
        value={price}
        onChange={handlePrice}
        sx={{minWidth:'100%'}}/>
      </Grid2>
     <Grid2 size={6}>
     <TextField
        id="outlined-basic"
        label="Enter Category"
        variant="outlined" 
        value={category}
        onChange={handleCategory}
        sx={{minWidth:'100%'}}/>
        </Grid2>
     <Grid2 size={12}>
      <Typography variant='h5' align='center'>
        <Button variant='contained' color='secondary' onClick={createProduct} >
            Update
        </Button>
      </Typography>
      </Grid2>
     </Grid2>
    </Box>
    </>
  )
}

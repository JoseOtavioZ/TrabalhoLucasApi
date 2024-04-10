import React, { useState } from "react";
import urlPlaceHolder from"../axios/config"


const AdicionarPost = () => {

  const [id,setId]= useState 


return(
    <div>
      <input type="Input" />  
      try{ 
      urlPlaceHolder.post(`${id}`).then(function(response){
        const dados = response.data;
        if (dados.erro){
          setMsgErro("")
          setEndereco({
          userId:userId,
          id:id,
          titulo: title,
          corpo: body
          });

        }else{
          setMsgErro("msg erro")
        }
      })
    };
    </div>
    
)
};

export default AdicionarPost;
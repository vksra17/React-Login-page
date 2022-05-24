// import { Offcanvas } from "bootstrap";
import { useFormik } from "formik";
export const Apk = ()=>{
      const formik = useFormik({
          initialValues:{
              name:""
          },
          onSubmit:(userData)=>{
            console.log(userData)
          }
      })
     return(<>
     <form onSubmit={formik.handleSubmit}>
         <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
         <button>submit</button>
     </form>
     </>)
 }
 
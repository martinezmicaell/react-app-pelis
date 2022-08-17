import React, {useState} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
    const [keyword, setKeyword] = useState('');

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault()
        // const keyword = e.target.search.value.trim();

        // if(keyword.length === 0) {
        //     MySwal.fire(<h5>Tienes que escribir una palabra clave!</h5>)
        // } else if(keyword.length < 4) {
        //     MySwal.fire(<h5>Tienes que escribir más de 4 letras</h5>)
        // } else {
        //     e.target.search.value = '';
        //     navigate(`/resultados?keyword=${keyword}`)
        // }


    }

    const handleSearch = (e) => {
        const keyword = e.target.value
        setKeyword(keyword);

        (keyword.length === 0) ? navigate(`/listado`) : navigate(`/resultados?keyword=${keyword}`)

    }

  return (
    <>
        <form className='d-flex align-items-center' onSubmit={handlerSubmit}>
            <label className='form-label mb-0'>
                <input type="text" className="form-control p-2 my-2" name="search" placeholder="Busca por palabra clave..." onChange={handleSearch} value={keyword}/>
            </label>
        <button className="btn btn-outline-primary  px-3 mx-2" type="submit">
            Buscar
        </button>
</form>
    </>
  )
}

export default Buscador
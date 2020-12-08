import React, {useState, useEffect} from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import useMyStore from '../../store/index'
const fakeUsers: object=[{ id: 1 , name : "Juan", lastName: "Ortiz" , age: 25}];

// Propiedades
type HomeProps  = {
  id?: number | string;
  loginStatus?: string ;
}

const Home: React.FC<HomeProps> = ({ id, loginStatus}) => {
    const[users, setUsers] =useState<object | undefined >(fakeUsers);
    const[isLoading, setIsLoading] = useState<boolean | undefined>(true);
    const[usersTwo , count ] = useMyStore((store:any) => [store.users, store.count]);
    console.log(usersTwo, count);
    
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 3000); 
    }, [])

    return (
        <div>
           {isLoading ? 'Cargando': ''}
        </div>
    )
}

export default Home

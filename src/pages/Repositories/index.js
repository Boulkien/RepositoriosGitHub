import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styled';

export default function Repositories(){
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {

        let repositoriesName = localStorage.getItem("RepositoriesName");

        if(repositoriesName !== null ){
            
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            navigate("/");
        }
    }, [navigate]);

    return(
        <S.Container>
            <S.Title> Repositorios </S.Title>
            <S.List>
                {repositories.map( (repository) => <S.ListItem>Repositório: { repository }</S.ListItem> )}
            </S.List>
            <S.LinkHome to="/"> Voltar </S.LinkHome>
        </S.Container>
    )
}

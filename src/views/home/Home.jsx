import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function Home () {

   return(
       <div >
            <MenuSistema />
            <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='/logo-IFPE.png' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                                <div className="flex flex-col gap-4">
                                    <span>Bem vindo ao sistema <span className="font-semibold">OxeFood</span>!</span>
                                    <span>
                                        Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III.
                                    </span>
                                    <span>
                                        Para acessar o código da <span className="font-semibold">API</span> do sistema, acesse: <a href='https://github.com/robertoalencar/oxefood-api' target='_blank'> https://github.com/DANIELSOUZA-1/oxefood-api-daniel</a>
                                    </span>
                                    <span>
                                        Para acessar o código do <span className="font-semibold">Módulo WEB</span>, acesse: <a href='https://github.com/robertoalencar/oxefood-web' target='_blank'> https://github.com/DANIELSOUZA-1/oxefood-web-daniel </a>
                                    </span>
                                </div>
                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}



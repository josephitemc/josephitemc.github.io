import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
   ___                      _     _ _          ___  ___      _   _         _____ _       _     
   |_  |                    | |   (_) |         |  \/  |     | | | |       /  __ \ |     | |    
     | | ___  ___  ___ _ __ | |__  _| |_ ___    | .  . | __ _| |_| |__     | /  \/ |_   _| |__  
     | |/ _ \/ __|/ _ \ '_ \| '_ \| | __/ _ \   | |\/| |/ _` | __| '_ \    | |   | | | | | '_ \ 
 /\__/ / (_) \__ \  __/ |_) | | | | | ||  __/   | |  | | (_| | |_| | | |   | \__/\ | |_| | |_) |
 \____/ \___/|___/\___| .__/|_| |_|_|\__\___|   \_|  |_/\__,_|\__|_| |_|    \____/_|\__,_|_.__/ 
                      | |                                                                       
                      |_|                                                                       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
    ___                      _     _ _       
    |_  |                    | |   (_) |      
      | | ___  ___  ___ _ __ | |__  _| |_ ___ 
      | |/ _ \/ __|/ _ \ '_ \| '_ \| | __/ _ \
  /\__/ / (_) \__ \  __/ |_) | | | | | ||  __/
  \____/ \___/|___/\___| .__/|_| |_|_|\__\___|
                       | |                    
                       |_|                             
    _  __     _          
    ___  ___      _   _     
    |  \/  |     | | | |    
    | .  . | __ _| |_| |__  
    | |\/| |/ _` | __| '_ \ 
    | |  | | (_| | |_| | | |
    \_|  |_/\__,_|\__|_| |_|
                            

    _____ _       _     
    /  __ \ |     | |    
    | /  \/ |_   _| |__  
    | |   | | | | | '_ \ 
    | \__/\ | |_| | |_) |
     \____/_|\__,_|_.__/ 
                         
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome!</div>
        <Seperator>----</Seperator>
        <div>
          THIS WEBSITE IS STILL UNDER CONSTRUCTION
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                                        ........... ...........................................       ................................                 
                                        :0XXXXXXXO: :OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOd:.  .lOKXXXXXXXXXNNNNNNNNNNNNNNNNNXKc.                
                                        cNMMMMMMMX: :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo.                
                                        cNMMMMMMMX: :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN :KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo.                
                                        cNMMMMMMMX: :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo.                
                                        cNMMMMMMMX: :KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW lKMMMMMMMMWXKKKKKKKKKKKKKKKKKKKK0c.                 
                                        ;xkkkkkkkx, ,k00000000000000000000000000000000KNMMMMMMMMMMW ;dOOOOOOOkl:'''''''''''''''''''''''                 
                                         '''''''''  '''''''''''''''''''''''''''''''''',cXMMMMMMMMMx '''''''''''                                         
                                       .;dxxxxxxxo: :lxddddddddo,    .lddddddddddo,    ,0MMMMMMMMMW ;oxxxxxxxx:.                                       
                                       .dWMMMMMMMNc :KMMMMMMMMMNc    ;XMMMMMMMMMMNl    ,0MMMMMMMMMM lXMMMMMMMMx.                                       
                                       .dWMMMMMMMNl :KMMMMMMMMMNc    ;KMMMMMMMMMMNl    ,0MMMMMMMMMM lXMMMMMMMMx.                                       
                                       .dWMMMMMMMNl :KMMMMMMMMMNc    ;KMMMMMMMMMMNl    ,KMMMMMMMMMM lXMMMMMMMMx.                                       
                                       .dWMMMMMMMNl :KMMMMMMMMMNc    ;KMMMMMMMMMMNl    ,KMMMMMMMMMM lXMMMMMMMMx.                                       
                 '                     .dWMMMMMMMNl :KMMMMMMMMMNc    ;KMMMMMMMMMMNl    ,KMMMMMMMMMM lXMMMMMMMMx.                                       
                 ''.                   .dWMMMMMMMNl :KMMMMMMMMMNc    ;KMMMMMMMMMMNl    ,KMMMMMMMMMW lXMMMMMMMMx.                                       
                 lNN0dl;'..            .dWMMMMMMMNl :KMMMMMMMMMNc    ;XMMMMMMMMMMNl    ,KMMMMMMMMMW lXMMMMMMMMx.                                       
                 lNMMMMWXKOkdoolllllllodKMMMMMMMMNl :KMMMMMMMMMNc    :XMMMMMMMMMMNl    ,KMMMMMMMMMW lXMMMMMMMMKdoooooooooooooooooool::'                 
                 lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl :KMMMMMMMMMNc    ,0MMMMMMMMMMNl    ,KMMMMMMMMMW lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0;.                 
                 lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc :KMMMMMMMMMNc     -oOXWMMMMMMNl    ,KMMMMMMMMMM lXMMMMMMMMMMMMMMMMMMMMMMMMMMMNx.                   
                 :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK; ;KMMMMMMMMMNc      '-.cxOKWMMNl    ,0MMMMMMMMMW :0MMMMMMMMMMMMMMMMMMMMMMMMMMNo.                    
                 .lKWMMMMMMMMMMMMMMMMMMMMMMMMMMWKc. ;KMMMMMMMMMNc          "-.:d0Kl    ,0MMMMMMMMMW :0WMMMMMMMMMMMMMMMMMMMMMMNO:.                     
                   .:looooooooooooooooooooooool:.   .cololllllllc               '-.    .:oooooooool  .;coooooooooooooooooddol;.   
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

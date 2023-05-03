import React from 'react';
import { Regulamin, PolitykaPrywatnosci } from 'components';

function Footer() {
  return (
<>
<img id='logo'></img>
<div className='social'>
  <icon></icon>
  <icon></icon>
</div>
<hr></hr>
<div>
  <Regulamin></Regulamin>
  <PolitykaPrywatnosci></PolitykaPrywatnosci>
</div>
<a id='creator' href='https://github.com/czescCi' target='_blank'>by stepniewska.js</a>
</>
    )
}

export default Footer
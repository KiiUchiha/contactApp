import React from 'react';
import ContactItemBody from './contactitemBody';
import ContactItemImage from './contactItemImage';
 
function ContactItem({ imageUrl, name, tag }) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
   </div>
 );
}
 
export default ContactItem;
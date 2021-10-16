import React from 'react'
import './Aside.css'
function Aside() {
    return (
        <section className="sidebar-container">
            <section role="button" className="note-type">
                <span className="note-type-icon">            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path d="M19.995 7.995C19.995 3.6 16.396 0 12 0S4.005 3.6 4.005 7.995c0 2.55 1.2 4.89 3.194 6.405v7.979H8.82V24h6.359v-1.62H16.8V14.4a7.975 7.975 0 0 0 3.195-6.405zM8.805 20.774v-1.575h6.391v1.575H8.805zm0-3.194v-1.575h6.391v1.575H8.805zm6.75-4.261l-.359.24v.841H8.805v-.84l-.345-.24a6.36 6.36 0 0 1-2.85-5.324c0-3.525 2.85-6.391 6.39-6.391s6.39 2.851 6.39 6.391a6.34 6.34 0 0 1-2.85 5.324h.015z" fill="currentColor"></path></svg>  
                </span>
                <span>Notes</span>
            </section>
            <section role="button"  className="note-type">
                <span className="note-type-icon">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7z" fill="currentColor"></path></svg>
                </span>
                <span>Reminders</span>
            </section>
            <section role="button"  className="note-type">
                <span className="note-type-icon">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75l2.53-2.54z" fill="currentColor"></path></svg>
                </span>
                <span>Edit Labels </span>
            </section>
            <section role="button"  className="note-type">
                <span className="note-type-icon">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 256 256"><path d="M167.598 144.401a8.001 8.001 0 0 1 0 11.315l-33.941 33.941c-.046.046-.095.085-.142.129c-.142.135-.284.27-.435.394c-.065.053-.135.1-.201.15c-.141.109-.281.219-.43.318c-.054.037-.113.067-.169.102c-.165.105-.33.209-.504.302c-.04.022-.085.04-.126.061c-.19.098-.383.193-.583.275c-.027.012-.056.02-.084.03a7.82 7.82 0 0 1-.651.234c-.029.01-.059.014-.087.023a7.83 7.83 0 0 1-.67.168c-.065.013-.132.019-.197.03c-.191.034-.383.067-.58.086a7.893 7.893 0 0 1-1.597 0c-.197-.02-.389-.053-.58-.086c-.065-.012-.131-.017-.195-.03a7.89 7.89 0 0 1-.672-.168c-.028-.009-.057-.014-.086-.023a7.815 7.815 0 0 1-.65-.233l-.085-.03a7.932 7.932 0 0 1-.583-.276c-.041-.021-.085-.039-.126-.06a8.038 8.038 0 0 1-.504-.303c-.056-.035-.115-.065-.17-.102c-.148-.1-.288-.209-.429-.318c-.066-.05-.136-.097-.2-.15a8.116 8.116 0 0 1-.436-.394c-.047-.044-.096-.083-.142-.129l-33.941-33.941A8 8 0 0 1 99.716 144.4L120 164.687V104a8 8 0 0 1 16 0v60.687l20.284-20.286a8.002 8.002 0 0 1 11.314 0zM224 72v136a16.018 16.018 0 0 1-16 16H48a16.018 16.018 0 0 1-16-16V72a8.127 8.127 0 0 1 .051-.884c.009-.073.024-.145.034-.218c.03-.221.066-.44.115-.655c.018-.082.041-.161.062-.243a7.99 7.99 0 0 1 .27-.851q.114-.296.25-.58c.022-.048.038-.1.063-.147l16-32A8 8 0 0 1 56 32h144a8 8 0 0 1 7.155 4.422l16 32c.024.048.04.099.064.147a8.031 8.031 0 0 1 .519 1.43c.02.082.044.163.062.245c.048.214.084.431.115.652c.01.073.025.147.034.22A8.118 8.118 0 0 1 224 72zM52.944 64h150.112l-8-16H60.944zM208.01 208L208 80H48v128h160.01z" fill="currentColor"></path></svg>
                </span>
                <span>Archive</span>
            </section>
            <section className="note-type">
                <span role="button"  className="note-type-icon">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="currentColor"></path></svg>
                </span>
                <span>Bin</span>
            </section>
        </section>
    )
}

export default Aside;

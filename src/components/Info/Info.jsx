import styles from "./Info.module.css"

function Info() {
    return (
        <div data-testid='info' id={styles.info}>
            <header className={styles.header}>Main St. Shop</header>
            <section>
                <p className={styles.p}>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Vestibulum platea per ullamcorper; condimentum euismod tellus. 
                    Euismod class mi dictum dui morbi conubia? Ligula bibendum penatibus per cras mi quis primis tortor. 
                    Dictum tincidunt hendrerit mus praesent purus; lorem fusce conubia ut. 
                    Nascetur placerat arcu habitasse sollicitudin duis donec malesuada diam. 
                    Dui tincidunt aliquet neque condimentum tellus taciti facilisi. Tempus suspendisse suspendisse quisque ipsum efficitur pretium diam. 
                    Torquent viverra aliquam nam, massa eu sollicitudin ligula. 
                    Efficitur consequat venenatis vulputate ligula fusce sit nisl rhoncus fermentum.
                </p>
                <p className={styles.p}>Blandit suscipit integer mollis quisque elit? Eget est imperdiet non platea natoque proin maximus luctus. 
                    Maximus habitant aenean phasellus ipsum faucibus turpis conubia. Fringilla orci ornare ligula et maecenas nam gravida. 
                    Consequat conubia sagittis; aliquet euismod ex maximus ligula ultrices integer. Libero felis nam luctus ultricies est tincidunt praesent feugiat. 
                    Nulla mollis tristique hendrerit fringilla lobortis, scelerisque purus. Scelerisque vulputate elementum nam laoreet erat. 
                    Sem urna sociosqu ipsum ut accumsan et elit.</p>
                <p className={styles.p}>
                Amet himenaeos fusce vestibulum finibus rutrum porttitor nibh. 
                Dui eleifend imperdiet placerat enim interdum integer congue. Lacus porta platea adipiscing rhoncus ligula. 
                Imperdiet ipsum eget lobortis luctus non tortor nec scelerisque. 
                Faucibus litora lorem; consectetur elit augue sociosqu. Mauris efficitur sit condimentum lacinia vitae vulputate sed euismod.
                </p>
            </section>
            <footer className={styles.footer}>Contact us at 111-222-3333 or notrealmail@gmail.com</footer>
        </div>
    )
}

export default Info
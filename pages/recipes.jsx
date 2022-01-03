import styles from '../styles/Recipes.module.css'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../stores/authContext';

export default function Guides() {
    const { user, authReady, login } = useContext(AuthContext)
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (authReady) {
            fetch('/.netlify/functions/recipes', user && {
                headers: {
                    Authorization: 'Bearer' + user.token.acces_token
                }
            })
                .then(res => {
                    if (!res.ok) {
                        login()
                        throw Error('Yous must be logged in to view this content')
                    }
                    return res.json()
                })
                .then(data => {
                    setError(null)
                    setRecipes(data)
                })
                .catch(err => {
                    setError(err.message)
                    setRecipes(null)
                })
        }
    }, [user, authReady, login]);

    return (
        <div className={styles.recipes}>
            {!authReady && <div>Loading...</div>}
            {error && (
                <div className={styles.error}>
                    <p>{error}</p>
                </div>
            )}
            {recipes && recipes.map(recipe => (
                <div key={recipe.title} className={styles.card}>
                    <h3>{recipe.title} </h3>
                    <h4>Author : {recipe.author} </h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae perspiciatis tempora voluptatem pariatur! Repudiandae, hic. Sunt molestias non ea iste quia ut labore nemo sed odit, laborum velit veritatis unde.</p>
                </div>))}
        </div >
    )
}
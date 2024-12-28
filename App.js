function App() {
    return (
        <div>
            <h1>Добро пожаловать в мини-приложение!</h1>
            <p>Заполните анкету и найдите своё совпадение.</p>
            <form>
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Возраст:
                    <input type="number" name="age" />
                </label>
                <br />
                <label>
                    Интересы:
                    <input type="text" name="interests" />
                </label>
                <br />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default App;

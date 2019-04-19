import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'movie', ...(require('F:/1809/last3/1/-Phantom/src/models/movie.js').default) });
app.model({ namespace: 'title', ...(require('F:/1809/last3/1/-Phantom/src/models/title.js').default) });

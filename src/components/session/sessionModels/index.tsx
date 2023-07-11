import { CardModels } from '../../card';
import { ModelsSession } from './style';

export function SessionModels() {
  return (
    <section aria-label="Seção dos modelos de expositores dos nossos parceiros">
      <ModelsSession>
        <h2>Modelos de Expositores dos Nossos Parceiros</h2>
        <section aria-label="card dos produtos">
          <CardModels />
        </section>
      </ModelsSession>
    </section>
  );
}

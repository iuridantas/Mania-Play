import { CardModels } from '../../card';
import { ModelsSession } from './style';

export function SessionModels() {
  return (
    <section aria-label="Seção dos modelos de expositores dos nossos parceiros">
      <ModelsSession>
        <h2>
          Aqui estão alguns dos modelos de expositores em nossos parceiros:
        </h2>
        <section aria-label="Card dos produtos">
          <CardModels />
        </section>
      </ModelsSession>
    </section>
  );
}

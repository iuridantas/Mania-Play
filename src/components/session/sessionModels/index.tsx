import { CardModels } from '../../card';
import { ProductAndServiceSession } from './style';

export function SessionModels() {
  return (
    <section aria-label="Seção dos modelos de expositores dos nossos parceiros">
      <ProductAndServiceSession>
        <h2>Os modelos de expositores de nossos parceiros</h2>
        <section aria-label="card dos produtos">
          <CardModels />
        </section>
      </ProductAndServiceSession>
    </section>
  );
}

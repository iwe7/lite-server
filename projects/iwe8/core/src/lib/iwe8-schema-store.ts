import { map, filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SFSchema, SFSchemaEnumType } from '@delon/form';
import { Iwe7Util2Service } from 'iwe7-util2';

export class Iwe8SchemaStore {
    children: { [key: string]: Iwe8SchemaStore } = {};
    constructor(
        public schema: SFSchema,
        private store: Store<any>,
        private util: Iwe7Util2Service,
        public parent?: Iwe8SchemaStore
    ) {
        if (schema) {
            for (let key in schema) {
                if (key === 'properties') {
                    const proper = schema['properties'];
                    for (let j in proper) {
                        this.children[j] = new Iwe8SchemaStore(proper[j], store, util, this);
                    }
                }
                if (key === 'ui') {
                    const ui: any = schema['ui'];
                    for (let j in ui) {
                        if (j === 'asyncData') {
                            const k: string = ui[j];
                            if (typeof k === 'string') {
                                const p = () => this.store.select(...k.split('.')).pipe(
                                    filter(res => !!res),
                                    filter(res => !!res.children),
                                    map(res => res.children)
                                );
                                ui[j] = p;
                            }
                        }
                        if (j === 'widget') {
                            if (ui['widget'] === 'upload') {
                                ui['action'] = this.util.wupload;
                                ui['resReName'] = '';
                                const k = ui['asyncData'];
                                if (typeof k === 'string') {
                                    const p = () => this.store.select(...k.split('.')).pipe(
                                        filter(res => !!res),
                                        tap(res => console.log('widget' + k, res))
                                    );
                                    ui['asyncData'] = p;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    getSchma() {
        const children = {};
        for (const index in this.children) {
            children[index] = this.children[index].getSchma();
        }
        this.schema.properties = children;
        return this.schema;
    }
}

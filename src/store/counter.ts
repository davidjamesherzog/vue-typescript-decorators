import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
export default class Counter extends VuexModule {
  // state
  private _count = 0;

  // getters
  get count(): number {
    return this._count;
  }

  // mutations
  @Mutation
  public addToCount() {
    this._count++;
  }

  @Mutation
  public subtractFromCount() {
    if (this._count > 0) {
      this._count--;
    }
  }

  // actions
  @Action
  public async add(): Promise<void> {
    this.addToCount();
  }

  @Action
  public async subtract(): Promise<void> {
    this.subtractFromCount();
  }
}

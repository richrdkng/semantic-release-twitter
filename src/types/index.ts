import {
  type Config  as SemanticReleaseConfig,
  type Context as SemanticReleaseContext,
} from 'semantic-release'

export type { SemanticReleaseConfig as PluginConfig }

export type Context = SemanticReleaseConfig & SemanticReleaseContext

export type SemanticReleaseLifecycle<T = any> = (pluginConfig: SemanticReleaseConfig, context: Context) => Promise<T>

export type SemanticReleasePlugin = {
  verifyConditions?: SemanticReleaseLifecycle
  analyzeCommits?:   SemanticReleaseLifecycle
  verifyRelease?:    SemanticReleaseLifecycle
  generateNotes?:    SemanticReleaseLifecycle
  addChannel?:       SemanticReleaseLifecycle
  prepare?:          SemanticReleaseLifecycle
  publish?:          SemanticReleaseLifecycle
  success?:          SemanticReleaseLifecycle
  fail?:             SemanticReleaseLifecycle
}

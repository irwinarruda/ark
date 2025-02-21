import { mergeProps } from '@zag-js/solid'
import { type JSX } from 'solid-js'
import { createSplitProps } from '../create-split-props'
import { ark, type ArkComponent, type HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import type { Assign } from '../types'
import { PaginationProvider } from './pagination-context'
import { usePagination, type UsePaginationProps, type UsePaginationReturn } from './use-pagination'

interface ElementProps extends UsePaginationProps {
  children?: JSX.Element | ((api: UsePaginationReturn) => JSX.Element)
}

export interface PaginationRootProps extends Assign<HTMLArkProps<'nav'>, ElementProps> {}

export const PaginationRoot: ArkComponent<'nav', PaginationRootProps> = (
  props: PaginationRootProps,
) => {
  const [paginationParams, localProps] = createSplitProps<UsePaginationProps>()(props, [
    'count',
    'dir',
    'getRootNode',
    'id',
    'ids',
    'onPageChange',
    'page',
    'pageSize',
    'siblingCount',
    'translations',
    'type',
  ])

  const api = usePagination(paginationParams)
  const mergedProps = mergeProps(() => api().rootProps, localProps)
  const getChildren = () => runIfFn(localProps.children, api)

  return (
    <PaginationProvider value={api}>
      <ark.nav {...mergedProps}>{getChildren()}</ark.nav>
    </PaginationProvider>
  )
}

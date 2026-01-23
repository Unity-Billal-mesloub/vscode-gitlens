import type { Container } from '../../container.js';
import type { GitWorktree } from '../../git/models/worktree.js';

export function reviewPr(_container: Container, _prSearch: string): Promise<{ worktree: GitWorktree }> {
	throw new Error('Not yet implemented');
}

import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeeddbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeeddbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) { }

  async execute(request: SubmitFeeddbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

  }
}
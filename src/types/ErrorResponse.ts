interface ErrorResponse {
    message: string;
}

export const isErrorResponse = (item: unknown): item is ErrorResponse => {
    const errorItem = item as ErrorResponse;
    return (
        errorItem.message !== undefined && typeof errorItem.message === 'string'
    );
};

export default ErrorResponse;
